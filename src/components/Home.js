import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  goToContact = () => {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome! We are a company that does stuff.</p>
        <p>Flannel quinoa street art, YOLO trust fund meh austin banh mi waistcoat. Humblebrag distillery vinyl mustache. Whatever seitan pickled food truck poutine snackwave street art succulents sriracha chambray vape kombucha pour-over biodiesel humblebrag. Bicycle rights af slow-carb vaporware typewriter, before they sold out sartorial fanny pack bespoke cliche pok pok. Raw denim trust fund food truck, sustainable stumptown mumblecore butcher church-key polaroid.</p>
        <button onClick={this.goToContact}>Click Me For More Contact Info</button>
      </div>
    )
  }
}

export default Home
