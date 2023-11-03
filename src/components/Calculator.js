import React from 'react'
import { useState } from 'react';
import Cleave from "cleave.js/react";
import '../App.css'
import { taxrates, countries, flags, years, taxshow} from '../data/reqdata';
import Faq from './Faq';
const Calculator = () => {
    const[purchase,setpurchase]=useState("");
    const[sale,setsale]=useState("");
    const [expense,setexpense]=useState("");
    const [countryind,setcountryind]=useState(0);
    const[taxind,settaxind]=useState(0);
    const [capitalgains,setcapitalgains]=useState(0);
    const [finaltax,setfinaltax]=useState(0);
  
    const getNumericValue = (formattedValue) => {
      return parseFloat(formattedValue.replace(/,/g, ""));
    };
    const calculate=()=>{
      if(sale!=="" && purchase !=="" && expense!==""){
        let saleprice = getNumericValue(sale);
        let purchaseprice = getNumericValue(purchase);
        let expenseprice = getNumericValue(expense);
        let x=purchaseprice-(saleprice+expenseprice);
        setcapitalgains(x);
        if(taxind===0 || taxind===1){
          setfinaltax((10*capitalgains)/100);
        }else{
          setfinaltax((20*capitalgains)/100);
        }
    }
    }
    
    return(
      <>
         <div className="frame">
        <div className="frame-wrapper">
          <div className="div">
            <p className="text-wrapper">Free Crypto Tax Calculator - {countries[countryind].country}</p>
            <div className="div-2">
              <div className="div-3">
                <div className="div-4">
                  <div className="text-wrapper-2">Financial Year</div>
                  <div className="div-wrapper">
                    <div className="frame-wrapper-2">
                      <div className="div-5">
                        <div className="text-wrapper-3">
                        <select className="text-wrapper-4 sel">
                              {years.map((e) => {
                                return (
                                  <>
                                    <option>{e}</option>
                                  </>
                                )
                              })}
                            </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper-2">Country</div>
                  <div className="div-6">
                    <div className="frame-wrapper-3">
                      <div className="div-7">
                        <div className="div-8">
                          <img className="circle-flags-uk" alt="Circle flags uk" src={flags[countryind]} />
                          <div className="text-wrapper-4">
                          <select className="text-wrapper-4 sel" onChange={(e)=>setcountryind(parseInt(e.target.value))}>
                                {countries.map((e) => {
                                  return (
                                    <>
                                      <option value={e.id}>{e.country}</option>
                                    </>
                                  )
                                })}
                              </select>
                          </div>
                        </div>
              
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hr" />
              <div className="div-9">
                <div className="div-10">
                  <p className="text-wrapper-5">Enter purchase price of Crypto</p>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-3">€ <Cleave className='input text-wrapper-3' options={{ numeral: true }} value={purchase} onChange={(e)=>setpurchase(e.target.value)}/></div>
                  </div>
                </div>
                <div className="div-10">
                  <p className="text-wrapper-5">Enter sale price of Crypto</p>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-3">€ <Cleave className=' input text-wrapper-3' options={{ numeral: true }} value={sale} onChange={(e)=>setsale(e.target.value)}/></div>
                  </div>
                </div>
              </div>
              <div className="div-9">
                <div className="div-10">
                  <div className="text-wrapper-5">Enter your Expenses</div>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-3">€ <Cleave className='input text-wrapper-3' options={{ numeral: true }} value={expense} onChange={(e)=>setexpense(e.target.value)}/></div>
                  </div>
                </div>
                <div className="div-10">
                  <div className="text-wrapper-6">Select your Annual Income</div>
                  <div className="div-11">
                    <div className="div-12" onClick={()=>calculate()}>
                      <div className="text-wrapper-7">
                        <select className='text-wrapper-7 sel' onChange={(e)=>settaxind(parseInt(e.target.value))}>
                          {taxrates.map((e)=>{
                            return(
                              <option key={e.id} value={e.id}>{e.range}</option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="circle-flags-uk">
                        {/*<IconlyLightOutline className="iconly-light-outline-arrow-down-2" />*/}
                      </div>
                    </div>
                    <div className="text-wrapper-8">Tax rate: {taxshow[taxind]}</div>
                  </div>
                </div>
              </div>
              <div className="div-13">
                <div className="div-14">
                  <p className="p">Net Capital gains tax amount</p>
                  <p className="element">
                    <span className="span">€</span>
                    <span className="text-wrapper-9"> {(capitalgains>0 && !isNaN(capitalgains)?capitalgains:0)}</span>
                    
                  </p>
                  
                </div>
                
                <div className="div-15">
                  <p className="p">The tax you need to pay*</p>
                  <p className="element-2">
                    <span className="text-wrapper-10">€</span>
                    <span className="text-wrapper-9"> {(finaltax>0 && !isNaN(finaltax)?finaltax:0)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq/>
      </>
    )
}

export default Calculator