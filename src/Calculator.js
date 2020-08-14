import React from 'react';
var justClear= true;
var justResult=false;
var isNumber;
var input='';
var arrFormula=[];
var hasilDisp='0';
class Calculator extends React.Component{
    state={
        display: ''
    }
    clickNumberInputs=(value)=>{
        if(justClear===true){
            justClear=false;
            isNumber=true;
            hasilDisp=''
            this.setState({
                display: ''
            },()=>{
                this.setState({
                    display: this.state.display+value
                })
                input=input+value;
                hasilDisp=hasilDisp+value
            })
        }
        else if(isNumber===true){//berarti sebelumnya angka
            if(input[0]==='0'){
                if(input[1]==null){
                    if(value===0){
                        value=''
                    }
                }
            }if(input.includes('.')===true && value==='.'){
                value=''
            }
            input=input+value;
            hasilDisp=hasilDisp+value
            this.setState({
                display: this.state.display+value
            })
        }else{//berarti sebelumnya operator
            isNumber=true;
            //multiple operators
            if(input.length>1){
                if(input[input.length-1]==='-'){
                    input=input[input.length-2]
                    arrFormula=arrFormula.concat(input);
                    input='-'+value;
                    hasilDisp='-'+value;
                    this.setState({
                        display: this.state.display+value
                    })
                }else{
                    input=input[input.length-1];
                    arrFormula=arrFormula.concat(input)
                    input=''+value
                    hasilDisp='-'+value
                    this.setState({
                        display: this.state.display+value
                    })
                }
            }else{
            arrFormula=arrFormula.concat(input);
            input=''+value;
            hasilDisp=''+value
            this.setState({
                display:this.state.display+value
            })
            }
        }
    }
    clickNumber=(value)=>{
        console.log(justResult)
        if(justResult===true){
            arrFormula=[]
            hasilDisp='';
            justResult=false;
            this.setState({
                display: ''
            },()=>{
                this.clickNumberInputs(value)
            })
        }else{  
            this.clickNumberInputs(value)
        }
    }
    clickOperator=(value)=>{
        if(justResult===true){
            this.setState({
                display: hasilDisp
            },()=>{
                this.clickOperatorInputs(value)
            })
        }else{
            this.clickOperatorInputs(value)
        }
    }
    clickOperatorInputs=(value)=>{
        if(justResult===true){
            justResult=false;
            this.setState({
                display: hasilDisp
            })
        }
        if(justClear===true){
            justClear=false;
            isNumber=false;
            hasilDisp=''
            this.setState({
                display: ''
            },()=>{
                this.setState({
                    display: this.state.display+value
                })
                input=input+value;
                hasilDisp=hasilDisp+value;
            })
        }else if(isNumber===true){//berarti sebelumnya angka{
            isNumber=false;
            arrFormula=arrFormula.concat(input);
            input='';
            hasilDisp='';
            input=value;
            hasilDisp=value;
            this.setState({
                display: this.state.display+value
            })
        }else{//berarti sebelumnya operator
            if(input.includes('-')===true && value==='-'){
                value=''
            }
            else if(input.length>0 && value!=='-'){
                hasilDisp=''+value;
                var arrTemp=this.state.display
                var arrTemp=arrTemp.substring(0,(arrTemp.length-1)-(input.length-1));
                this.setState({
                    display: arrTemp
                },()=>{
                    this.setState({
                        display: this.state.display+value
                    })
                })
                input=''+value
            }else{
            input=input+value
            hasilDisp=''+value
            this.setState({
                display: this.state.display+value
            })

            }
        }
        console.log(input)
    }
    clickClear=()=>{
        this.setState({
            display: '',
        })
        justClear =true;
        input='';
        hasilDisp='0';
        arrFormula=[];
    }
    getResult=()=>{
        arrFormula=arrFormula.concat(input);
        for(let i =0;i<arrFormula.length;i++){
            if(arrFormula[i]===''){
                arrFormula.splice(i,1);
                i--;
            }
        }
        var result=0;
        var operation;
        for(let i =0;i<arrFormula.length;i++){
            if(i===0){
                result=parseFloat(arrFormula[i]);
            }else if(i%2===0 && i!=0){
                if(operation==='+'){
                    result=result+parseFloat(arrFormula[i]);
                }else if(operation==='-'){
                    result=result-parseFloat(arrFormula[i]);
                }else if(operation==='*'){
                    result=result*parseFloat(arrFormula[i]);
                }else if(operation==='/'){
                    result=result/parseFloat(arrFormula[i]);
                }
            }else{
                if(arrFormula[i]==="+"){
                    operation='+'
                }else if(arrFormula[i]==="-"){
                    operation='-'
                }else if(arrFormula[i]==="*"){
                    operation='*'
                }else if(arrFormula[i]==="/"){
                    operation='/'
                }
            }
        }
        arrFormula=[result.toString()];
        // arrFormula=[]
        // arrFormula=arrFormula.concat(result.toString());
        if(justResult===false){
            this.setState({
                display: this.state.display+'='+result.toString()
            })
        }
        input='';
        hasilDisp=result;
        justResult=true;
    }
render(){
    return(
        <div id="calculator">
            <div id="display-container">
                <div id="formula">{this.state.display}</div>
                <div id="display">{hasilDisp}</div>
            </div>
            <div id="button-container">
            <button id="clear" onClick={this.clickClear}>AC</button>
            <button id="divide" className="operButton" onClick={()=>this.clickOperator('/')}>/</button>
            <button id="multiply" className="operButton" onClick={()=>this.clickOperator('*')}>x</button>
            <button id="seven" className="numButton" onClick={()=>this.clickNumber(7)}>7</button>
            <button id="eight" className="numButton" onClick={()=>this.clickNumber(8)}>8</button>
            <button id="nine" className="numButton" onClick={()=>this.clickNumber(9)}>9</button>
            <button id="subtract" className="operButton" onClick={()=>this.clickOperator('-')}>-</button>
            <button id="four" className="numButton" onClick={()=>this.clickNumber(4)}>4</button>
            <button id="five" className="numButton" onClick={()=>this.clickNumber(5)}>5</button>
            <button id="six" className="numButton" onClick={()=>this.clickNumber(6)}>6</button>
            <button id="add" className="operButton" onClick={()=>this.clickOperator('+')}>+</button>
            <button id="one" className="numButton" onClick={()=>this.clickNumber(1)}>1</button>
            <button id="two" className="numButton" onClick={()=>this.clickNumber(2)}>2</button>
            <button id="three" className="numButton" onClick={()=>this.clickNumber(3)}>3</button>
            <button id="zero" className="numButton" onClick={()=>this.clickNumber(0)}>0</button>
            <button id="decimal" className="numButton" onClick={()=>this.clickNumber('.')}>.</button>
            <button id="equals" onClick={this.getResult}>=</button>
            </div>
        </div>
    )
}
}
export default Calculator