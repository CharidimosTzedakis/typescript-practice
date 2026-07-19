export {};

type TreeNodeType = {
  value: number;
  children: [TreeNodeType] | [TreeNodeType, TreeNodeType] | null;
};

// type LeafNode = TreeNode & { children: null };
// type OneChildNode = TreeNode & { children: [TreeNode] };
// type TwoChildNode = TreeNode & { children: [TreeNode, TreeNode] };

const treeNode4: TreeNodeType = {
  value: 15,
  children: null,
};

const treeNode3: TreeNodeType = {
  value: 12,
  children: null,
};

const treeNode2: TreeNodeType = {
  value: 7,
  children: [treeNode4],
};

const rootNode: TreeNodeType = {
  value: 3,
  children: [treeNode2, treeNode3],
};

const mapNodeFunction = (
  node: TreeNodeType,
  mapFunction: (value: number) => number,
): TreeNodeType => {
  return {
    ...node,
    value: mapFunction(node.value),
  };
};

const mappedRoot = mapNodeFunction(rootNode, (value) => value ** 2);
