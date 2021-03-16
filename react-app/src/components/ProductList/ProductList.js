import { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem'
import { Link } from 'react-router-dom'

class ProductList extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <Link to='/product/add' className="btn btn-info mb-10">Thêm sản phẩm</Link>
                  <div className="panel panel-primary">
                     <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                     </div>
                     <div className="panel-body">

                        <table className="table table-bordered table-hover App">
                           <thead>
                              <tr>
                                 <th className="App">STT</th>
                                 <th className="App">Mã SP</th>
                                 <th className="App">Tên</th>
                                 <th className="App">Giá</th>
                                 <th className="App">Trạng Thái</th>
                                 <th className="App">Hành Động</th>
                              </tr>
                           </thead>
                           <tbody>
                              {this.props.children}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default ProductList;
