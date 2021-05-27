class Subject {
  constructor(name, state) {
    this.name = name
    this.state = state
    this.observer = []
  }
  attach = (o) => {
    this.observer.push(o)
  }
  setState = (newState) => {
    this.state = newState
    this.observer.forEach(o => o.update(this))
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update = (o) => {
    console.log(`${this.name} know ${o.name} ${o.state}`);
  }
}
let baby = new Subject('baby', 'happy')
let fa = new Observer('fa')
let ma = new Observer('ma')
baby.attach(fa)
baby.attach(ma)
baby.setState('unhappy')
baby.setState('happy')