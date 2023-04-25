import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateaccount.scss";
import  {service}   from './updateaccount.service';

class Updateaccount extends React.Component<any, any> {
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
        <h2 className="screen-align">updateaccount</h2>
        <div id="template-i90n" className="gjs-row">
    <div id="template-i7ff" className="gjs-cell">
        <div id="template-ifd1o">Update Account</div>
        <div id="template-ib56" className="gjs-row">
            <div id="template-i2zi" className="gjs-cell">
                <div id="template-ixbg">Account Information</div>
            </div>
            <div id="template-i086" className="gjs-cell">
                <div id="template-is3t" className="gjs-row">
                    <div id="template-i3te" className="gjs-cell">
                        <div id="template-izw1t" className="gjs-row">
                            <div id="template-ioufd" className="gjs-cell">
                                <div id="template-ilaxoy">Account Owner</div>
                            </div>
                            <div id="template-inlc6" className="gjs-cell">
                                <input id="template-iy5mv" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ioqcs" className="gjs-row">
                            <div id="template-ifirw" className="gjs-cell">
                                <div id="template-irvc9x">Account Name</div>
                            </div>
                            <div id="template-ijj4k" className="gjs-cell">
                                <input id="template-i8uv4" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-i9jub" className="gjs-row">
                            <div id="template-idf9s" className="gjs-cell">
                                <div id="template-iomc9i">Parent Account </div>
                            </div>
                            <div id="template-i4x1h" className="gjs-cell">
                                <input id="template-i4gmf" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ifdwd" className="gjs-row">
                            <div id="template-iwhnj" className="gjs-cell">
                                <div id="template-ifeyi2">Account Number</div>
                            </div>
                            <div id="template-i1fwj" className="gjs-cell">
                                <input id="template-ilpv4" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-itrdx" className="gjs-row">
                            <div id="template-ixc1c" className="gjs-cell">
                                <div id="template-iytx8f">Account Size</div>
                            </div>
                            <div id="template-i7mpk" className="gjs-cell">
                                <input id="template-igyua" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ibfyl" className="gjs-row">
                            <div id="template-iy8dt" className="gjs-cell">
                                <div id="template-igk8wg">Type</div>
                            </div>
                            <div id="template-ipall" className="gjs-cell">
                                <select id="template-im4a4t" className="select ">
                                    <option value="" id="template-ig2a9f">- Select option -</option>
                                    <option id="template-i7vwom">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-i5dep" className="gjs-row">
                            <div id="template-i5wek" className="gjs-cell">
                                <div id="template-il0lko">Industry</div>
                            </div>
                            <div id="template-ixl2c" className="gjs-cell">
                                <select id="template-ihsg1d" className="select ">
                                    <option value="" id="template-i6qrnf">- Select option -</option>
                                    <option id="template-i05xqs">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-ifmyp" className="gjs-row">
                            <div id="template-ifag7" className="gjs-cell">
                                <div id="template-i1d0w2">Annual Revenue</div>
                            </div>
                            <div id="template-izdnz" className="gjs-cell">
                                <input id="template-id9jx" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-is5rh" className="gjs-row"></div>
                        <div id="template-it6lh" className="gjs-row"></div>
                        <div id="template-ihy4y" className="gjs-row"></div>
                    </div>
                    <div id="template-ikxb8k" className="gjs-cell">
                        <div id="template-ihcsqp" className="gjs-row">
                            <div id="template-ijbf0i" className="gjs-cell">
                                <div id="template-ip2p2p">Rating</div>
                            </div>
                            <div id="template-ill1ob" className="gjs-cell">
                                <select id="template-ipl5ay" className="select ">
                                    <option value="" id="template-imwbto">- Select option -</option>
                                    <option id="template-iq1u96">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-i94rky" className="gjs-row">
                            <div id="template-iwcipv" className="gjs-cell">
                                <div id="template-i61xfh">Phone</div>
                            </div>
                            <div id="template-is02sr" className="gjs-cell">
                                <input id="template-i0sc8f" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ixiang" className="gjs-row">
                            <div id="template-ic74t9" className="gjs-cell">
                                <div id="template-il8qyd">Fax</div>
                            </div>
                            <div id="template-icwnvc" className="gjs-cell">
                                <input id="template-irxdx8" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ijlmyg" className="gjs-row">
                            <div id="template-i70hld" className="gjs-cell">
                                <div id="template-ibsai6">Website</div>
                            </div>
                            <div id="template-i1evbf" className="gjs-cell">
                                <input id="template-ialfx6" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-i3l9xv" className="gjs-row">
                            <div id="template-i6hsdf" className="gjs-cell">
                                <div id="template-ibo1cs">Ticket Symbol</div>
                            </div>
                            <div id="template-irm8cz" className="gjs-cell">
                                <input id="template-iaiixr" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ibop14" className="gjs-row">
                            <div id="template-itjskw" className="gjs-cell">
                                <div id="template-i0fhbk">OwnerShip</div>
                            </div>
                            <div id="template-iy4uth" className="gjs-cell">
                                <select id="template-izwtb5" className="select ">
                                    <option value="" id="template-iku0ih">- Select option -</option>
                                    <option id="template-i63n2y">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-i0zlwv" className="gjs-row">
                            <div id="template-is44bh" className="gjs-cell">
                                <div id="template-iajq1k">Employees</div>
                            </div>
                            <div id="template-ijx619" className="gjs-cell">
                                <input id="template-ie82rz" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ij7dm" className="gjs-row">
                            <div id="template-ierwk" className="gjs-cell">
                                <div id="template-i8zb3">SIC Code</div>
                            </div>
                            <div id="template-i0p3x" className="gjs-cell">
                                <input id="template-inxzv2" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-i0m5km" className="gjs-row"></div>
                        <div id="template-i6rt6f" className="gjs-row"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-iuob0r" className="gjs-row">
            <div id="template-ijoagt" className="gjs-cell">
                <div id="template-iahc0o">Address Information</div>
            </div>
            <div id="template-i5imqj" className="gjs-cell">
                <div id="template-i2fltz" className="gjs-row">
                    <div id="template-ie4tjc" className="gjs-cell">
                        <div id="template-iak2fh" className="gjs-row">
                            <div id="template-incmik" className="gjs-cell">
                                <div id="template-izb0cf">Billing Street</div>
                            </div>
                            <div id="template-i8ymi1" className="gjs-cell">
                                <textarea id="template-i7tnrf" className="textarea "></textarea>
                            </div>
                        </div>
                        <div id="template-ivand1" className="gjs-row">
                            <div id="template-ieke1q" className="gjs-cell">
                                <div id="template-it31z5">Billing City</div>
                            </div>
                            <div id="template-ihz26l" className="gjs-cell">
                                <input id="template-ib4q8i" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-iv8884" className="gjs-row">
                            <div id="template-iqhaol" className="gjs-cell">
                                <div id="template-icy9l2">Billing <span id="template-i5vf1s">
State/Province</span>

                                </div>
                            </div>
                            <div id="template-i295it" className="gjs-cell">
                                <input id="template-iihq4q" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ij2c0a" className="gjs-row">
                            <div id="template-iblaup" className="gjs-cell">
                                <div id="template-i1cwsr">
<span id="template-isbnii">
<span id="template-ioyms6" >
Billing</span>
 Zip/Postal Code</span>
                                </div>
                            </div>
                            <div id="template-ibpdsj" className="gjs-cell">
                                <input id="template-i2zwkl" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-imw7ax" className="gjs-row">
                            <div id="template-izqqej" className="gjs-cell">
                                <div id="template-i5n6k6">
<span id="template-intm05">
<span id="template-ih52qm" >
Billing</span>
 Country</span>
                                </div>
                            </div>
                            <div id="template-ifmgke" className="gjs-cell">
                                <input id="template-i4bjh2" className="input form-control " />
                            </div>
                        </div>
                    </div>
                    <div id="template-isjk23" className="gjs-cell">
                        <div id="template-ifmtpz" className="gjs-row">
                            <div id="template-i4c3kg" className="gjs-cell">
                                <div id="template-ijtiun">Shipping Street</div>
                            </div>
                            <div id="template-iqyx0f" className="gjs-cell">
                                <textarea id="template-ie9iwm" className="textarea "></textarea>
                            </div>
                        </div>
                        <div id="template-i797mh" className="gjs-row">
                            <div id="template-ixd494" className="gjs-cell">
                                <div id="template-idchcb">Shipping City</div>
                            </div>
                            <div id="template-il507n" className="gjs-cell">
                                <input id="template-imlzly" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-iyud2i" className="gjs-row">
                            <div id="template-iasj4h" className="gjs-cell">
                                <div id="template-i78a62">Shipping State/Province</div>
                            </div>
                            <div id="template-i110x2" className="gjs-cell">
                                <input id="template-iw3ujr" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-is3iq5" className="gjs-row">
                            <div id="template-i2mt65" className="gjs-cell">
                                <div id="template-iqo1jh">Shipping Zip/Postal Code</div>
                            </div>
                            <div id="template-i9ji94" className="gjs-cell">
                                <input id="template-i1aylg" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-iehhs6" className="gjs-row">
                            <div id="template-ien5nl" className="gjs-cell">
                                <div id="template-iuffkm">Shipping Country</div>
                            </div>
                            <div id="template-iuwudg" className="gjs-cell">
                                <input id="template-i0l9uh" className="input form-control " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-icibfv" className="gjs-row">
            <div id="template-i9s6xf" className="gjs-cell">
                <div id="template-i1s4x5">Additional Information</div>
            </div>
            <div id="template-iqgn7d" className="gjs-cell">
                <div id="template-ir6cj5" className="gjs-row">
                    <div id="template-ii146a" className="gjs-cell">
                        <div id="template-ikajxc" className="gjs-row">
                            <div id="template-iog5hr" className="gjs-cell">
                                <div id="template-iaaoy8">Customer Priority</div>
                            </div>
                            <div id="template-i6gayd" className="gjs-cell">
                                <select id="template-iaddxx" className="select ">
                                    <option value="" id="template-iccwut">- Select option -</option>
                                    <option id="template-i6pdme">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-ihvs9t" className="gjs-row">
                            <div id="template-i7ks1b" className="gjs-cell">
                                <div id="template-iymx14">SLA Expiration Date</div>
                            </div>
                            <div id="template-i0qdkt" className="gjs-cell">
                                <input id="template-iwy9n5" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-i5d82a" className="gjs-row">
                            <div id="template-i8opd8" className="gjs-cell">
                                <div id="template-idh5y5">Number of Locations</div>
                            </div>
                            <div id="template-ixe45c" className="gjs-cell">
                                <input id="template-iai8qo" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ie1e2t" className="gjs-row">
                            <div id="template-i4a20w" className="gjs-cell">
                                <div id="template-isya2l">Active</div>
                            </div>
                            <div id="template-idq2pb" className="gjs-cell">
                                <select id="template-iorj6e" className="select ">
                                    <option value="" id="template-ilf67g">- Select option -</option>
                                    <option id="template-ivaer9">Option 1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="template-iwdzee" className="gjs-cell">
                        <div id="template-ijbs2c" className="gjs-row">
                            <div id="template-i9ou6l" className="gjs-cell">
                                <div id="template-ik4jay">SLA</div>
                            </div>
                            <div id="template-ibxwxd" className="gjs-cell">
                                <select id="template-ifwpw7" className="select ">
                                    <option value="" id="template-ip3h8o">- Select option -</option>
                                    <option id="template-icajzo">Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div id="template-i1qtjc" className="gjs-row">
                            <div id="template-iq83i4" className="gjs-cell">
                                <div id="template-i6ll6g">SLA Serial Number</div>
                            </div>
                            <div id="template-iya6zt" className="gjs-cell">
                                <input id="template-iw95ok" className="input form-control " />
                            </div>
                        </div>
                        <div id="template-ife7b3" className="gjs-row">
                            <div id="template-iwsjvy" className="gjs-cell">
                                <div id="template-io2kif">Upsell Opportunity</div>
                            </div>
                            <div id="template-ipn9hk" className="gjs-cell">
                                <select id="template-ir8whh" className="select ">
                                    <option value="" id="template-ilt678">- Select option -</option>
                                    <option id="template-iybue7">Option 1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-iosus9" className="gjs-row">
            <div id="template-ic1sw8" className="gjs-cell">
                <div id="template-ia7bm7">Description Information</div>
            </div>
            <div id="template-iu459q" className="gjs-cell">
                <div id="template-idboxq" className="gjs-row">
                    <div id="template-i2xc6j" className="gjs-cell">
                        <div id="template-igibeg" className="gjs-row">
                            <div id="template-ij5xxk" className="gjs-cell">
                                <div id="template-ikz8ex">Description</div>
                            </div>
                            <div id="template-izk8b9" className="gjs-cell">
                                <textarea id="template-iumhha" className="textarea "></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-i5zwik" className="gjs-row">
            <div id="template-iowq7k" className="gjs-cell">
                <button id="template-icypk2" className="button btn btn-primary ">Save</button>
                <button id="template-ipquca" className="button btn btn-primary ">Save & New</button>
                <button id="template-idkrzq" className="button btn btn-primary ">Cancel</button>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Updateaccount;