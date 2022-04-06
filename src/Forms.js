import React from "react";
export default class Forms extends React.Component {
  state = { 
      name: " ",
      massage: " ",
      JS: " ",
      checked : true,
 };

  handerchange = (e) => {
    console.log(e.target.value);
    // this.setState({
    //   name: e.target.value,

    // });
    if(e.target.type ==='text'){
        this.setState({
            name:e.target.value
        });
    }

    else if(e.target.type === 'textarea'){
        this.setState({
            massage:e.target.value
        });
    }
    else if(e.target.type === 'select-one') {
      
        this.setState({
            JS:e.target.value
        });
        
    }
    else if (e.target.type === 'checkbox'){
        this.setState({
            checked : e.target.checked 
        })
    }
    else {
        // console.log(e.target.type)
        console.log('take care ')
    }
    
  };

//   handerChecked = (e) => {
//       this.setState({
//           checked : e.target.checked
//       });
//   }

 handerSumbit = (e) =>{
    const { name ,massage,JS,checked} = this.state;
    e.preventDefault();
    console.log(name ,massage,JS,checked);
 }

  render() {
    const { name ,massage,JS,checked} = this.state;
    return (
      <>
        <form onSubmit={this.handerSumbit }>
          <label>
            Name:
            <input
              type="text"
              placeholder="write"
              value={name}
              onChange={this.handerchange}
            />
          </label>
          <br/>
          <br />
          <label> Massage: 
          type na diye name dichi .but kono problem hoy nai condition kaj korse 
          <textarea name ="textarea"
           placeholder=" wirte your text"
           value={massage}
           onChange={this.handerchange} />
          </label>
        <br/>
        <br/>
         
        <label>
            please select option : 
            <select value={JS} onChange={this.handerchange}>
                <option value = 'angela'> angela</option>
                <option value = 'vue.JS'>vue.JS</option>
                <option value = 'react'>react</option>
                <option value = 'jQuery'>jQuery</option>
            </select>
        </label>
        <input type='checkbox' checked ={checked} onChange={this.handerchange }/>
      <br/> 
    
          <input type="submit" value="submit" />

        </form>
      </>
    );
  }
}
