import React from 'react';
import Logo from  './1.jpg';

class Todo extends React.Component {
    state={
        data:'',
        array:[],
    }
    itemEvent = (event) => {
        this.setState({data: event.currentTarget.value});
    }
    saveItem = () => {
        
        if(this.state.data !==''){
            let arr = [...this.state.array];
            arr.push(this.state.data);
            this.setState({array: arr})
            this.setState({data: ''})
            document.getElementById('data').value ='';
        }
        
        
    }
    delItem = (event) => {
        let arr = [...this.state.array];
        let index = arr.indexOf(arr[+event.currentTarget.value]);
            if (index > -1) {
                arr.splice(index, 1);
            }
        this.setState({array: arr});
    }
    delall = ( ) =>{
        this.setState({array: []})
    }
    render() { 
        return (<div>
                <div className="body">
                    <div className="content">
                    <img className="ii" src={Logo} alt=""/>
                    </div>
                    <div className="main">

                    <div className="side2">
                        <div className="todo">
                        TODO
                            </div>
                        <div className="flex">

                        <input className="in" id='data' type="text" placeholder='Type here' onChange={this.itemEvent}/>
                        <button className='btn1' onClick={this.saveItem}>+</button>
                        </div>

                        <div className="t">
                            <div className='d'> {this.state.data}</div>
                            {this.state.array.map((vl, ind) => (<div className='d'><button className="icon" onClick={this.delItem} value={ind}>x</button>{vl}</div>))}
                            {this.state.array.length > 1 ? (<div className='d'><button className='delbtn' onClick={this.delall}>Delete All</button></div>):null}
                        </div>
                    </div>
                    </div>
                </div>
        </div>)
    }
}
 
export default Todo;