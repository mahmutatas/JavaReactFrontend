import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon,  Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'


export default function PositionsList() {
    const [positions, setPositions] = useState([])

    useEffect(() =>{
        //sayfa yüklendiğinde çağrılacak fonksiyonları buraya yazıyoruz.
        let productService = new ProductService()
        productService.getPositions().then(result => setPositions(result.data.data))
    },[])

    return (
        <div>
            <Table>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={10}>Company Name</Table.HeaderCell>
                        <Table.HeaderCell width='six'>Positions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {positions.map((positions) => (
                        <Table.Row key = {positions.id}>
                            <Table.Cell><Link  to ={`/positions/${positions.name}`}>{positions.name}</Link></Table.Cell>
                            <Table.Cell>{positions.name}</Table.Cell>
                        </Table.Row>
                    ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
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
