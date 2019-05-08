/* Because classes are not hoisted you will need to start 
your code at the bottom of the page.  
Look for the comment "START HERE" */

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    /* Using your expandButton reference, update the text on 
    your expandButton to say "expand"*/
    this.expandButton.textContent = "expand";
    /* Set a click handler on the expandButton reference, calling 
    the expandArticle method.*/
    this.expandButton.addEventListener('click', () => this.expandArticle());
    
    //this.articleBtnOpen = this.domElement.querySelector('.btn-open');
    //this.articleBtnClose = this.domElement.querySelector('.btn-close');
  }

  expandArticle() {
    /* Using our reference to the domElement, toggle a class 
    to expand or hide the article. */
    this.article.classList.toggle('article-open');
    this.article.classList.toggle('close');
    //this.articleBtnOpen.classList.toggle('hide-btn');
    //this.expandButton.textContent = "Close";
    //this.articleBtnClose.classList.toggle('hide-btn');
    //this.expandButton.classList.toggle('article');
  };
};

/* START HERE: 

- Select all classes named ".article" and assign that value to 
the articles variable.  

- With your selection in place, now chain .forEach() on to the 
articles variable to iterate over the articles NodeList and 
create a new instance of Article by passing in each article 
as a parameter to the Article class.

*/
//Step 1: Get Original DOM Elements
const articles = document.querySelectorAll('.article');

//Step 2: Return a newly Constructed DOM Element
articles.forEach(function(article) {
  return new Article(article);
});