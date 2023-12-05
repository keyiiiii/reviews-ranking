import parser from '../parser';
import { data1 } from "../testData/data1";
import { data2 } from "../testData/data2";
import { data3 } from "../testData/data3";

describe('parser function', () => {
  it('should correctly rank reviewers based on the number of reviews for data1', () => {
    const expectedOutput =
      '1. user2: 2 PRs reviewed\n2. user1: 1 PRs reviewed\n2. user3: 1 PRs reviewed';
    expect(parser(data1)).toBe(expectedOutput);
  });

  it('should correctly rank reviewers based on the number of reviews for data2', () => {
    const expectedOutput =
      '1. user2: 4 PRs reviewed\n2. user1: 2 PRs reviewed\n2. user3: 2 PRs reviewed\n4. user4: 1 PRs reviewed';
    expect(parser(data2)).toBe(expectedOutput);
  });

  it('should correctly rank reviewers based on the number of reviews for past dates', () => {
    const expectedOutput = '1. user2: 1 PRs reviewed\n1. user3: 1 PRs reviewed';
    expect(parser(data3)).toBe(expectedOutput);
  });
});
