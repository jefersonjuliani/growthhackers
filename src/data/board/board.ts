import pic from "../img/2.png"
import pic2 from "../img/1.png"
import pic3 from "../img/3.png"



export function loadBoard() {
    return {
      todo: {
          id: 'todo',
          name:'TO DO',
          list: [
          {
            id:"1",
            content: 'Insert a "generating ideas" videos on page for example',
            name: "Mary Jane",
            photo: pic
          },
          {
            id:"2",
            content: 'Insert a "generating ideas" videos on page for example',
            name: "Carlos Maia",
            photo: pic2
          },
          {
            id:"3",
            content: 'Insert a "generating ideas" videos on page for example',
            name: "Paul Walker",
            photo: pic3
          },
          {
            id:"4",
            content: 'Insert a "generating ideas" videos on page for example',
            name: "Mary Jane",
            photo: pic
          },
        ]
      },

      doing: {
        id: 'doing',
        name:'DOING',
        list: [
        {
          id:"21",
          content: 'Insert a "generating ideas" videos on page for example',
          name: "Paul Walker",
          photo: pic3
        },
        {
          id:"22",
          content: 'Insert a "generating ideas" videos on page for example',
          name: "Mary Jane",
          photo: pic
        },
      ]
    },

    done: {
      id: 'done',
      name:'DONE',
      list: [
      {
        id:"31",
        content: 'Insert a "generating ideas" videos on page for example',
        name: "Mary Jane",
        photo: pic
      },
      {
        id:"32",
        content: 'Insert a "generating ideas" videos on page for example',
        name: "Paul Walker",
        photo: pic3
      }
    ]
  },

  superdone: {
    id: 'superdone',
    name:'SUPER DONE',
    list: [
    {
      id:"41",
      content: 'Insert a "generating ideas" videos on page for example',
      name: "Mary Jane",
      photo: pic
    },
  ]
},

  }
}