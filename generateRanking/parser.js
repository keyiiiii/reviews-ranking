const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

module.exports = function (reviews) {
  const reviewers = {};
  reviews.data.repository.pullRequests.nodes.forEach((pr) => {
    const mergedAt = new Date(pr.mergedAt);
    if (mergedAt < oneWeekAgo) {
      return;
    }

    const reviewersSet = new Set();

    pr.reviews.nodes.forEach((review) => {
      const reviewer = review.author.login;
      reviewersSet.add(reviewer);
    });

    reviewersSet.forEach((reviewer) => {
      if (!reviewers[reviewer]) {
        reviewers[reviewer] = 0;
      }
      reviewers[reviewer]++;
    });
  });

  const sortedReviewers = Object.entries(reviewers).sort((a, b) => b[1] - a[1]);

  let lastCount = null;
  let rank = 0;
  return sortedReviewers
    .map(([reviewer, count], index) => {
      if (count !== lastCount) {
        rank = index + 1;
        lastCount = count;
      }
      return `${rank}. ${reviewer}: ${count} PRs reviewed`;
    })
    .join('\n');
};
