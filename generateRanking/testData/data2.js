export const data2 = {
  data: {
    repository: {
      pullRequests: {
        nodes: [
          {
            mergedAt: new Date(),
            reviews: {
              nodes: [
                {
                  author: {
                    login: 'user1'
                  }
                },
                {
                  author: {
                    login: 'user2'
                  }
                },
                {
                  author: {
                    login: 'user1'
                  }
                },
                {
                  author: {
                    login: 'user4'
                  }
                }
              ]
            }
          },
          {
            mergedAt: new Date(),
            reviews: {
              nodes: [
                {
                  author: {
                    login: 'user2'
                  }
                },
                {
                  author: {
                    login: 'user3'
                  }
                }
              ]
            }
          },
          {
            mergedAt: new Date(),
            reviews: {
              nodes: [
                {
                  author: {
                    login: 'user1'
                  }
                },
                {
                  author: {
                    login: 'user2'
                  }
                },
                {
                  author: {
                    login: 'user1'
                  }
                }
              ]
            }
          },
          {
            mergedAt: new Date(),
            reviews: {
              nodes: [
                {
                  author: {
                    login: 'user2'
                  }
                },
                {
                  author: {
                    login: 'user3'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
};
