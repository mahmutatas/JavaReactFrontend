import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function JobAdvertisementsList() {
    const [jobAds, setJobAds] = useState([])

    useEffect(() =>{
        //sayfa yüklendiğinde çağrılacak fonksiyonları buraya yazıyoruz.
        let productService = new ProductService()
        productService.getJobAdvertisements().then(result => setJobAds(result.data.data))
    },[])

    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {jobAds.map((jobAds) =>(
                    <Table.Row key = {jobAds.id}>
                        <Table.Cell><Link to = {`/jobAds/${jobAds.name}`}>{jobAds.name}</Link></Table.Cell>
                        <Table.Cell>{jobAds.name}</Table.Cell>
                        <Table.Cell><Link to = {`/jobAds/${jobAds.positionName}`}>{jobAds.positionName}</Link></Table.Cell>
                        <Table.Cell>{jobAds.positionName}</Table.Cell>
                        <Table.Cell><Link to = {`/jobAds/${jobAds.quantity}`}>{jobAds.quantity}</Link></Table.Cell>
                        <Table.Cell>{jobAds.quantity}</Table.Cell>
                        <Table.Cell><Link to = {`/jobAds/${jobAds.pubDate}`}>{jobAds.pubDate}</Link></Table.Cell>
                        <Table.Cell>{jobAds.pubDate}</Table.Cell>
                        <Table.Cell><Link to = {`/jobAds/${jobAds.expiredDate}`}>{jobAds.expiredDate}</Link></Table.Cell>
                        <Table.Cell>{jobAds.expiredDate}</Table.Cell>
                    </Table.Row>
                ))}
                </Table.Body>
            </Table>
        </div>
    )
}