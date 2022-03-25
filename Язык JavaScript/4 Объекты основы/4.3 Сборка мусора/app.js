//////////////////////////////////////////////////////////////////////
// в user находится ссылка на объект
let user = {
  name: "John"
};

user = null;

//////////////////////////////////////////////////////////////////////

// в user находится ссылка на объект
let user = {
  name: "John"
};

let admin = user;

user = null;

//////////////////////////////////////////////////////////////////////

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

delete family.father;
delete family.mother.husband;

family = null;

//////////////////////////////////////////////////////////////////////


