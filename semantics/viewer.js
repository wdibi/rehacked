const fs = require('fs');

const width = 1920,
  height = 1080;

module.exports = (root) => {
  const dataset = { entities: [], edges: [] };
  addReachableEntities(root, dataset, -1);
  dataset.entities = dataset.entities.map((e, i) => nodeText(e, i));
  writeData(dataset);
  return 'success';
};

function nodeText(node, index) {
  let text = node.constructor.name;
  Object.entries(node).forEach(([prop, value]) => {
    if (['boolean', 'number', 'string'].includes(typeof value)) {
      text += ` ${prop}=${value}`;
    }
  });
  return {
    name: text,
    id: index,
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
}

function addReachableEntities(node, dataset, parentIndex, label) {
  if (dataset.entities.includes(node)) {
    dataset.edges.push({
      source: parentIndex,
      target: dataset.entities.indexOf(node),
      label,
    });
    return;
  }
  dataset.entities.push(node);
  const nodeIndex = dataset.entities.length - 1;
  if (parentIndex >= 0) {
    dataset.edges.push({
      source: parentIndex,
      target: nodeIndex,
      label: label,
    });
  }
  Object.entries(node).forEach(([prop, value]) => {
    if (Array.isArray(value)) {
      value.forEach((n, i) =>
        addReachableEntities(n, dataset, nodeIndex, `${prop}[${i}]`)
      );
    } else if (typeof value === 'object' && value !== null) {
      addReachableEntities(value, dataset, nodeIndex, prop);
    }
  });
}

function writeData(data) {
  fs.writeFileSync('./graph/data.json', JSON.stringify(data));
}