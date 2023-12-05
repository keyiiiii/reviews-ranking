export const data3 = {
  data: {
    repository: {
      pullRequests: {
        nodes: [
          {
            mergedAt: new Date(2020, 0, 0, 0, 0, 0),
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
          }
        ]
      }
    }
  }
};
