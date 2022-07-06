
import React, { Component } from 'react'
import loading from './loading.gif'
import {Link} from 'react-router-dom'

export default class PkmnCard extends Component {

  state = {

    name:'',
    url: '',
    index:'',
    
  }
  componentDidMount () {

    const { name , url} = this.props;
    const index = url.split('/')[url.split('/').length - 2];
    const sprite =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

    this.setState({

      name,
      index,
      sprite
      

    })
    


  }
  render() {

    


    return (
      <Link to={`pokemon/${this.state.index}`}>
        <div className='flex flex-col h-64  items-center p-10 rounded-xl  shadow-lg hover:shadow-2xl hover:border-stone-700 bg-white select-none '>
            <h3 className=' text-center'>{this.state.name.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h3>
            <h1>{this.state.url}</h1>
            {this.state.imageLoading ? (<img src={loading} className="mx-auto w-10 h-10" alt="loading gif"/>) :null}
            <img className='mx-auto' style={this.state.tooManyRequests ? {display: "none"} : this.state.imageLoading ? null : {display: "block"}} src={this.state.sprite} alt={this.state.name} onLoad={() => this.setState({imageLoading: false})} onError={ () => this.setState({ tooManyRequests: true})} />
            {this.state.tooManyRequests ? (<h6 className='mx-auto bg-red-600'> <span className='text-white'>Too Many Requests </span></h6>) :null }
            <h3 className="text-center">-No.{this.state.index}-</h3>
          
        </div>
      </Link>

    )   

  }
  
}

