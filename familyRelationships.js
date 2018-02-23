/*
Given simple details of a family's relationships, where dashes are used to indicate different generations, print out each line of descent. For example, the input

Andrea
-Brian
--Claire
--Derek
-Edwina
Frank

shows that Andrea and Frank are siblings, Andrea has two children Brian and Edwina, and Brian has two children Claire and Derek. The output should follow the form:

Andrea → Brian → Claire
Andrea → Brian → Derek
Andrea → Edwina
Frank
*/

let input = `Andrea
-Brian
--Claire
--Derek
-Edwina
Frank`;

function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.insert = function (value) {
  this.children.push(new Tree(value));
};

family = new Tree('progenitor');
family.insert('Andrea');
family.children[0].insert('Brian');
family.children[0].children[0].insert('Claire');
family.children[0].children[0].insert('Derek');
family.children[0].insert('Edwina');
family.insert('Frank');
