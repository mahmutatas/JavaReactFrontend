import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function EmployeesList() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        //sayfa yüklendiğinde çağrılacak fonksiyonları buraya yazıyoruz.
        let productService = new ProductService()
        productService.getEmployeesList().then(result => setEmployees(result.data.data))
    }, [])

    return (
        <div>
            <Table>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={10}>Employee Name</Table.HeaderCell>
                        <Table.HeaderCell width='six'>Positions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {employees.map((employees) => (
                        <Table.Row key={employees.id}>
                            <Table.Cell><Link to={`/employees/${employees.name}`}>{employees.name}</Link></Table.Cell>
                            <Table.Cell>{employees.name}</Table.Cell>
                            <Table.Cell><Link to={`/employees/${employees.positionName}`}>{employees.positionName}</Link></Table.Cell>
                            <Table.Cell>{employees.positionName}</Table.Cell>
                        </Table.Row>

                    ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='center' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
