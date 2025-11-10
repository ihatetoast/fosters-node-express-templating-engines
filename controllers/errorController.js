exports.getErrorPage = (req, res, next) => {
  // regular HTML
  // res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
  // for PUG:
  res.status(404).render('404', {pageTitle: '404: Page not found', path:''})
}