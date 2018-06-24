export const adaptServerData = (data) => {
  let adaptedData = [];

  for (const question of data) {
    let answers = [];

    for (const answer of question.answers) {
      answers.push({src: answer.image.url, type: answer.type});
    }

    adaptedData.push(answers);
  }

  return adaptedData;
};
