import { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {
    onDelete = (id) => {
        var { product, onDelete } = this.props
        if (window.confirm(`Xác nhận xóa ${product.name} ?`)) { //eslint-disable-line
            onDelete(id)
        }
    }
    render() {
        var { product, index } = this.props
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng'
        var statusClass = product.status ? 'warning' : 'default'
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/edit/${product.id}`} className="btn btn-success mr-10">Sửa</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
