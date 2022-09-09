import React from 'react'

 class Form extends React.Component {
     render(){
        return(
            <form onSubmit={this.props.showWeatherMethod}>
                <input className="form-city" name="city" placeholder="Введите город"/>
                <button className="city-ok">ОK</button>
            </form>
        )
     }
}

export default Form;