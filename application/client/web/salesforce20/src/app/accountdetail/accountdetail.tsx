import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./accountdetail.scss";
import  {service}   from './accountdetail.service';

class Accountdetail extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    salesforceentity : {
    name: '',
    company: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ salesforceentity: { ...this.state.salesforceentity, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.salesforceentity.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">accountdetail</h2>
        <div id="template-i40s" className="gjs-row">
    <div id="template-i31d" className="gjs-cell">
        <div id="template-ijif" className="gjs-row">
            <div id="template-ip5k" className="gjs-cell">
                <div id="template-ibum0x">Account Detail</div>
            </div>
            <div id="template-it2j" className="gjs-cell">
                <button id="template-ie6zbd" className="button btn btn-primary ">Edit</button>
                <button id="template-i4h0kj" className="button btn btn-primary ">Delete</button>
            </div>
        </div>
        <div id="template-ipgn" className="gjs-row">
            <div id="template-icgx" className="gjs-cell">
                <div id="template-in8x" className="gjs-row">
                    <div id="template-ilj15" className="gjs-cell">
                        <div id="template-iyu8q">Acccount Owner</div>
                    </div>
                    <div id="template-i340z" className="gjs-cell">
                        <div id="template-i5oth">HarishSundar</div>
                    </div>
                </div>
                <div id="template-ibk1h" className="gjs-row">
                    <div id="template-ip4zt" className="gjs-cell">
                        <div id="template-i6yxc">Acccount Name</div>
                    </div>
                    <div id="template-iof3g" className="gjs-cell">
                        <div id="template-i1gcl">United  Oil & Gas Corp</div>
                    </div>
                </div>
                <div id="template-ipgq2" className="gjs-row">
                    <div id="template-icdjc" className="gjs-cell">
                        <div id="template-i8lqq">Parent Name</div>
                    </div>
                    <div id="template-iteup" className="gjs-cell">
                        <div id="template-iqqre">Name</div>
                    </div>
                </div>
                <div id="template-im8yun" className="gjs-row">
                    <div id="template-i9co0j" className="gjs-cell">
                        <div id="template-idotre">Account Number</div>
                    </div>
                    <div id="template-im175h" className="gjs-cell">
                        <div id="template-itqvz6">CD355118</div>
                    </div>
                </div>
                <div id="template-ir2q9k" className="gjs-row">
                    <div id="template-izxns9" className="gjs-cell">
                        <div id="template-i5i0nj">Account Site</div>
                    </div>
                    <div id="template-ip1nue" className="gjs-cell">
                        <div id="template-idhewu">Website</div>
                    </div>
                </div>
                <div id="template-icpkpv" className="gjs-row">
                    <div id="template-i5llof" className="gjs-cell">
                        <div id="template-ibhjjl">Type</div>
                    </div>
                    <div id="template-ifnt1g" className="gjs-cell">
                        <div id="template-i227d4">Customer - Direct</div>
                    </div>
                </div>
                <div id="template-ife5gf" className="gjs-row">
                    <div id="template-ilyps5" className="gjs-cell">
                        <div id="template-io70ek">Industry</div>
                    </div>
                    <div id="template-iucjbn" className="gjs-cell">
                        <div id="template-iwugfi">Energy</div>
                    </div>
                </div>
                <div id="template-iqrymo" className="gjs-row">
                    <div id="template-il50qy" className="gjs-cell">
                        <div id="template-i5c6s5">Annual Revenue</div>
                    </div>
                    <div id="template-ixzodf" className="gjs-cell">
                        <div id="template-isms9y">$ 5,600,000,000</div>
                    </div>
                </div>
                <div id="template-ig7p6h" className="gjs-row">
                    <div id="template-iqiqd1" className="gjs-cell">
                        <div id="template-iup5xh">Billing Address</div>
                    </div>
                    <div id="template-ih0lmd" className="gjs-cell">
                        <div id="template-i9gtc6">1301 Avenue of the Americas New York, NY 10019 USA</div>
                    </div>
                </div>
                <div id="template-i6j8ff" className="gjs-row">
                    <div id="template-ixxbw" className="gjs-cell">
                        <div id="template-iwag4">Customer Priority</div>
                    </div>
                    <div id="template-i9lj7x" className="gjs-cell">
                        <div id="template-i4lng">High</div>
                    </div>
                </div>
                <div id="template-izqb9" className="gjs-row">
                    <div id="template-icpyw" className="gjs-cell">
                        <div id="template-iirw7">SLA Expiration Date</div>
                    </div>
                    <div id="template-ixfdk" className="gjs-cell">
                        <div id="template-ih3z8">8/6/2023</div>
                    </div>
                </div>
                <div id="template-iwuxi" className="gjs-row">
                    <div id="template-i9ihq" className="gjs-cell">
                        <div id="template-i6i7n">Number of Locations </div>
                    </div>
                    <div id="template-i8kvw" className="gjs-cell">
                        <div id="template-ikchi">955</div>
                    </div>
                </div>
                <div id="template-iiygh" className="gjs-row">
                    <div id="template-id4wd" className="gjs-cell">
                        <div id="template-ib1us">Active</div>
                    </div>
                    <div id="template-i2rgp" className="gjs-cell">
                        <div id="template-ij6pj">Yes</div>
                    </div>
                </div>
                <div id="template-io82w" className="gjs-row">
                    <div id="template-i2vbc" className="gjs-cell">
                        <div id="template-il6b4">Created By</div>
                    </div>
                    <div id="template-ima0z" className="gjs-cell">
                        <div id="template-ipf2y">HarishSundar</div>
                    </div>
                </div>
                <div id="template-ir3a5s" className="gjs-row">
                    <div id="template-ieo7yj" className="gjs-cell">
                        <div id="template-icgxvk">Description</div>
                    </div>
                    <div id="template-ic78p5" className="gjs-cell">
                        <div id="template-ifvssf">World's third largest oil and gas company</div>
                    </div>
                </div>
                <div id="template-i6pew2" className="gjs-row">
                    <div id="template-i3henp" className="gjs-cell">
                        <div id="template-itvsqn">Custom Links</div>
                    </div>
                    <div id="template-ive3km" className="gjs-cell">
                        <div id="template-itemof">Billing</div>
                    </div>
                </div>
            </div>
            <div id="template-iwazh" className="gjs-cell">
                <div id="template-inviy" className="gjs-row">
                    <div id="template-iozyh" className="gjs-cell">
                        <div id="template-in1qdv">Rating</div>
                    </div>
                    <div id="template-ia07c" className="gjs-cell">
                        <div id="template-ilqsux">Hot</div>
                    </div>
                </div>
                <div id="template-iexbjf" className="gjs-row">
                    <div id="template-ior1hc" className="gjs-cell">
                        <div id="template-ix73gp">Phone</div>
                    </div>
                    <div id="template-i42iy4" className="gjs-cell">
                        <div id="template-iegs0g">(212)  842-5500</div>
                    </div>
                </div>
                <div id="template-i2ac0j" className="gjs-row">
                    <div id="template-io5xpi" className="gjs-cell">
                        <div id="template-ij299j">fax</div>
                    </div>
                    <div id="template-iwoznt" className="gjs-cell">
                        <div id="template-i4tsob">(212)  842-5500</div>
                    </div>
                </div>
                <div id="template-ispqll" className="gjs-row">
                    <div id="template-i3w49y" className="gjs-cell">
                        <div id="template-iz3n5j">Website</div>
                    </div>
                    <div id="template-ikhnw7" className="gjs-cell">
                        <div id="template-ixes4i">htttp://www.uos.com</div>
                    </div>
                </div>
                <div id="template-i70cvw" className="gjs-row">
                    <div id="template-i4ng44" className="gjs-cell">
                        <div id="template-ilguv4">Ticket Symbol</div>
                    </div>
                    <div id="template-iz0w2s" className="gjs-cell">
                        <div id="template-i8clli">UOS</div>
                    </div>
                </div>
                <div id="template-irwp2d" className="gjs-row">
                    <div id="template-i9mj6v" className="gjs-cell">
                        <div id="template-iqn1yv">OwnerShip</div>
                    </div>
                    <div id="template-i4q7ej" className="gjs-cell">
                        <div id="template-iben1s">Public</div>
                    </div>
                </div>
                <div id="template-ihpe1u" className="gjs-row">
                    <div id="template-ixdwlw" className="gjs-cell">
                        <div id="template-ijwqyg">Employees</div>
                    </div>
                    <div id="template-imelp2" className="gjs-cell">
                        <div id="template-i1kfuf">145,000</div>
                    </div>
                </div>
                <div id="template-in0fwj" className="gjs-row">
                    <div id="template-icikfq" className="gjs-cell">
                        <div id="template-ioharg">SIC Code</div>
                    </div>
                    <div id="template-i6qe3u" className="gjs-cell">
                        <div id="template-igi20x">4437</div>
                    </div>
                </div>
                <div id="template-i8ycf4" className="gjs-row">
                    <div id="template-iqmmu5" className="gjs-cell">
                        <div id="template-ikjbln">Shipping Address</div>
                    </div>
                    <div id="template-iw32pl" className="gjs-cell">
                        <div id="template-i8d1tj">1301 Avenue of the Americas New York, NY 10019 USA</div>
                    </div>
                </div>
                <div id="template-i8yy4q" className="gjs-row">
                    <div id="template-ib6uui" className="gjs-cell">
                        <div id="template-i51s8o">SLA</div>
                    </div>
                    <div id="template-idtazl" className="gjs-cell">
                        <div id="template-ixevs6">Platinum</div>
                    </div>
                </div>
                <div id="template-imu5oa" className="gjs-row">
                    <div id="template-iz9z24" className="gjs-cell">
                        <div id="template-i786ig">SLA Serial Number</div>
                    </div>
                    <div id="template-iky19l" className="gjs-cell">
                        <div id="template-ih66k6">6654</div>
                    </div>
                </div>
                <div id="template-in10f8" className="gjs-row">
                    <div id="template-iwp9bs" className="gjs-cell">
                        <div id="template-if43iw">Upsell Opportunity</div>
                    </div>
                    <div id="template-ix1x56" className="gjs-cell">
                        <div id="template-i32rir">Yes</div>
                    </div>
                </div>
                <div id="template-ib4mih" className="gjs-row">
                    <div id="template-i9smov" className="gjs-cell">
                        <div id="template-ij7y7s">Last Modified BY</div>
                    </div>
                    <div id="template-ipwqoh" className="gjs-cell">
                        <div id="template-ih4eql">HarishSundar
                            <br id="template-id4ra8"></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Accountdetail;