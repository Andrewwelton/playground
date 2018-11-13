const wordList = ["pinetree", "pineapple", "pill", "pallbearer", "please", "hire", "me"];

class TreeNode {
  constructor(letter) {
    this.children = {};
    this.letter = letter;
    this.isEndOfWord = false;
    this.frequency = 0;
  }
};

class Tree {
  constructor() {
    this.root = new TreeNode("");
    this.storedWords = [];
  }

  insert(word) {
    const length = word.length;
    var currentNode = this.root;
    for(var i = 0; i < length; i++) {
      const letter = word[i];
      if(!currentNode.children[letter]) {
        var newNode = new TreeNode(letter);
        newNode.frequency++;
        currentNode.children[letter] = newNode
      } else {
        currentNode.children[letter].frequency++;
      }
      currentNode = currentNode.children[letter];
    }
    this.storedWords.push(word);
  }

  findUniquePrefixes() {
    const prefixes = [];
    this.storedWords.forEach((word, index) => {
      var currentNode = this.root;
      prefixes[index] = "";
      for(var i = 0; i < word.length; i++) {
        prefixes[index] += currentNode.children[word[i]].letter;
        if(currentNode.children[word[i]].frequency === 1) {
          break;
        }
        currentNode = currentNode.children[word[i]];
      }
    });
    return prefixes;
  }
};

const findUniquePrefix = function(words) {
  const prefixTree = new Tree();
  words.forEach((word, index) => {
    prefixTree.insert(word);
  });
  const prefixes = prefixTree.findUniquePrefixes();
  console.log(prefixes);
  return prefixes;
};

findUniquePrefix(wordList);