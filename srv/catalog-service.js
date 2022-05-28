module.exports = srv => {
    console.log("Service name: " + srv.name + " is served at " + srv.path);
    srv.after('READ','Books', req => {
        // console.log(req);
        const newBooks = [];
        req.forEach(e => {
            if (e.stock > 500) {
                e.title = '(10% off)' + e.title;
            };
            newBooks.push(e);
        });
        return newBooks;
    });
  }