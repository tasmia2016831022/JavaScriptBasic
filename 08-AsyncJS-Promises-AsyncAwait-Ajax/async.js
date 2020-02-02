const first = () => {
  console.log("Hey There");
  second();
  console.log("The end");
};

const second = () => {
  setTimeout(() => {
    console.log("Async Hey There");
  }, 2000);
};

first();

//Callback

function getRecipie() {
  setTimeout(() => {
    const recipieID = [12, 13, 14, 15];
    console.log(recipieID);

    setTimeout(
      id => {
        const recipie = {
          title: "Fresh tomato pasta",
          publisher: "Jane Miller"
        };
        console.log(`${id}: ${recipie.title}`);

        setTimeout(
          publisher => {
            const recipie2 = {
              title: "Pizza",
              publisher: "Janes"
            };
            console.log(recipie);
            console.log(recipie2);
          },
          1550,
          recipie.publisher
        );
      },
      1000,
      recipieID[2]
    );
  }, 2000);
}
getRecipie();

//Promise
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([12, 13, 14, 15]);
  }, 1500);
});

const getRecipiee = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipie = {
          title: "Beef calamari",
          publisher: "Linda"
        };
        resolve(`${ID} : ${recipie.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipie3 = {
          title: "Chicken Stew",
          publisher: "Mark Joans"
        };
        resolve(`${pub}: ${recipie3.title}`);
      },
      2000,
      publisher
    );
  });
};

getIDs
  .then(IDs => {
    console.log(IDs);
    return getRecipiee(IDs[2]);
  })
  .then(recipie => {
    console.log(recipie);
    return getRelated("Mark Jonas");
  })
  .then(recipie => {
    console.log(recipie);
  })
  .catch(error => {
    console.log(error);
  });

//Async / Await (ES8)

async function getRecipiesAW() {
  const IDs = await getIDs;
  console.log(IDs);

  const recipie = await getRecipiee(IDs[2]);
  console.log(recipie);

  const related = await getRelated("Mark Jonas Linda");
  console.log(related);

  return recipie;
}

getRecipiesAW().then(result => console.log(`${result} is the best ever .`));
