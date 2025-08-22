import React from "react";
import { Table } from "react-bootstrap";

function Education()
{
    return (
        <div className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Year Of Passing</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S.S.C</td>
                        <td>Nashik Board</td>
                        <td>2020</td>
                        <td>86%</td>
                    </tr>
                    <tr>
                        <td>H.S.C</td>
                        <td>Nashik Board</td>
                        <td>2022</td>
                        <td>61%</td>
                    </tr>
                    <tr>
                        <td>B.C.A</td>
                        <td>KBC North Maharashtra University</td>
                        <td> 2025</td>
                        <td>75%</td>
                    </tr>
                    <tr>
                        <td>Java Full Stack</td>
                        <td>ITVEDANT</td>
                        <td> 2025</td>
                        <td>Appearing</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Education;