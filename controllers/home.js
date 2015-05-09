'use strict';
/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};
exports.quizdiabetes = function(req, res) {
  res.render('quizdiabetes', {
    title: 'quiz'
  });
};
