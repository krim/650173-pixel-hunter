import assert from 'assert';
import {adaptServerData} from './data-adapter';

const serverData = [
  {
    "type": `one-of-three`,
    "question": `Найдите рисунок среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://imgur.com/18zh0az.jpg`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://i.imgur.com/GbcYNPw.jpg`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `https://k32.kn3.net/42C83EF0A.jpg`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      }
    ]
  },
  {
    "type": `tinder-like`,
    "question": `Угадай, фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `https://i.imgur.com/DiHM5Zb.jpg`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `two-of-two`,
    "question": `Угадайте для каждого изображения фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `https://k34.kn3.net/4244FE50B.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `https://k43.kn3.net/1C4F7F5D5.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      }
    ]
  }
];

const expectedData = [
  [
    {src: `http://imgur.com/18zh0az.jpg`, type: `photo`},
    {src: `http://i.imgur.com/GbcYNPw.jpg`, type: `photo`},
    {src: `https://k32.kn3.net/42C83EF0A.jpg`, type: `painting`}
  ],
  [
    {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}
  ],
  [
    {src: `https://k34.kn3.net/4244FE50B.jpg`, type: `painting`},
    {src: `https://k43.kn3.net/1C4F7F5D5.jpg`, type: `painting`}
  ]
];

describe(`Adapt server data`, () => {
  it(`should have same format for answers`, () => {
    assert.deepEqual(adaptServerData(serverData), expectedData);
  });
});
