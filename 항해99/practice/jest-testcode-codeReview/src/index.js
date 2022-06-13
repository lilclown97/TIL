//this = Site
class Site {
    //Site { boards: [] }
    constructor() {
        this.boards = [];
    }

    //boards 안의 board의 name와 추가하는 board의 name이 같을 경우 throw
    //board.inSite를 true로 바꿈
    //boards 배열에 board 추가, Board { name: '공지사항', inSite: false, articles: [] }
    addBoard(board) {
        if (this.boards.find((x) => x.name === board.name)) throw Error;

        board.inSite = true;
        this.boards.push(board);
    }

    //boards 배열에서 원하는 name을 가진 board 객체 find
    findBoardByName(name) {
        return this.boards.find((x) => x.name === name);
    }
}

//this = Board
class Board {
    //Board { name: '공지사항', inSite: false, articles: [] }
    constructor(name) {
        if (name === null || name === '') throw Error;

        this.name = name;
        this.inSite = false;
        this.articles = [];
    }

    //Board의 inSite가 false일 경우 throw
    //Board에 추가할 때 시간, 랜덤 id 부여
    //article.inBoard를 true로 바꿈
    //articles 배열에 article 추가,
    // Article {
    //   subject: '글 제목',
    //   content: '내용',
    //   author: '작성자',
    //   inBoard: true,
    //   comments: [],
    //   createdDate: '2022-06-04T09:31:14.147Z',
    //   id: '사이트에 추가된 게시판-0.24156564662695068'
    // }
    publish(article) {
        if (this.inSite === false) throw Error;

        article.createdDate = new Date().toISOString();
        article.id = `${this.name}-${Math.random()}`;
        article.inBoard = true;
        this.articles.push(article);
    }

    //Board안의 articles 전체 조회
    getAllArticles() {
        return this.articles;
    }
}

//this = Article
class Article {
    // Article {
    //   subject: '글 제목',
    //   content: '내용',
    //   author: '작성자',
    //   inBoard: true,
    //   comments: [],
    //   createdDate: '2022-06-04T09:31:14.147Z',
    //   id: '사이트에 추가된 게시판-0.24156564662695068'
    // }
    //subject, contentm, author 중 '', null 인 것이 있을 경우 throw
    constructor(article) {
        const { subject, content, author } = article;

        if (
            subject === null ||
            subject === '' ||
            content === null ||
            content === '' ||
            author === null ||
            author === ''
        )
            throw Error;

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.inBoard = false;
        this.comments = [];
    }

    //Article의 inBoard가 false일 경우 throw
    //comment 추가 할 때 시간 부여
    //Article의 comments 배열에 push, Comment { content: '넵!', author: '댕댕이' }
    reply(comment) {
        if (this.inBoard === false) throw Error;

        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    //Article 안의 comments 전체 조회
    getAllComments() {
        return this.comments;
    }
}

//this = Comment
class Comment {
    //content, author이 null,'' 일 경우 throw
    constructor(comment) {
        const { content, author } = comment;
        if (content === '' || content === null || author === '' || author === null) throw Error;

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
