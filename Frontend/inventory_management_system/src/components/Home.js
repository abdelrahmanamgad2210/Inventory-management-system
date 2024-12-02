import React, { useEffect, useState } from 'react';

export default function Home() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:3001/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if (res.status === 201) {
                console.log("Data Retrieved.");
                setProductData(data);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='container-fluid p-5'>
            <h1>Products Inventory</h1>
            <div className="overflow-auto mt-3" style={{ maxHeight: "38rem" }}>
                <table className="table table-striped table-hover mt-3 fs-5">
                    <thead>
                        <tr className="tr_color">
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Barcode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.map((element, id) => {
                                return (
                                    <tr key={id}>
                                        <th scope="row">{id + 1}</th>
                                        <td>{element.ProductName}</td>
                                        <td>{element.ProductPrice}</td>
                                        <td>{element.ProductBarcode}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
