import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Menu, Icon } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function EmployersList() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        //sayfa yüklendiğinde çağrılacak fonksiyonları buraya yazıyoruz.
        let productService = new ProductService()
        productService.getEmployersList().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>
            <Table>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={10}>Employer Name</Table.HeaderCell>
                        <Table.HeaderCell width='six'>Positions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {employers.map((employers) => (
                        <Table.Row key={employers.id}>
                            <Table.Cell><Link to={`/employers/${employers.name}`}>{employers.name}</Link></Table.Cell>
                            <Table.Cell>{employers.name}</Table.Cell>
                            <Table.Cell><Link to={`/employers/${employers.positionName}`}>{employers.positionName}</Link></Table.Cell>
                            <Table.Cell>{employers.positionName}</Table.Cell>
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

