export const adaptServerData = (data) => {
  const adaptedData = [];

  for (const question of data) {
    const answers = [];

    for (const answer of question.answers) {
      answers.push({src: answer.image.url, type: answer.type});
    }

    adaptedData.push(answers);
  }

  return adaptedData;
};
