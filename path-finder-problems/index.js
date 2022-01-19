let grid = new PF.Grid(10, 10);
let finder = new PF.AStarFinder();
let path = finder.findPath(1, 1, 9, 9, grid);

console.log(path);
