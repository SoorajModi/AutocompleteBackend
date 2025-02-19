// If I were to use a DB:
// SELECT * FROM table WHERE word is LIKE "%{query}%" ORDER BY frequency LIMIT 10 

class TreeNode {
    children: Record<string, TreeNode>;
    isWord: boolean;
    frequency: number;

    constructor() {
        this.children = {};
        this.isWord = false;
        this.frequency = 0;
    }
}

class AutocompleteTree {
    root: TreeNode; 

    constructor() {
        this.root = new TreeNode();
        this.insertWordsFromFile();
    }

    insertWord(word: string): void {
        let node = this.root;

        for (const letter of word) {
            if (!node.children[letter]) {
                node.children[letter] = new TreeNode();
            }
            node = node.children[letter];
        }

        node.isWord = true;
        node.frequency += 1;
    }

    insertWordsFromFile() {
        // TODO: read from file, for each word, insert it into the tree with insertWord function
    }
    
    search(word: string): string[] {
        let node = this.root;

        for (const letter of word) {
            if (!node.children[letter]) {
                // Return empty list if word not found
                return [];
            }
            node = node.children[letter];
        }

        return this.getListofWordsFromNode(node, word);
    }

    getListofWordsFromNode(node: TreeNode, word: string): string[] {
        let results: string[] = [];

        if (node.isWord) {
            results.push(word);
        }

        for (const letter in node.children) {
            results.push(...this.getListofWordsFromNode(node.children[letter], word + letter));
        }

        return results;
    }
}