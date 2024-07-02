import React from 'react'
import Header from '@Admin/Layouts/Header'
import Sidebar from '@Admin/Layouts/Sidebar'
import { Table } from "flowbite-react";

export default function ANews() {
  return (
    <div className="">
        <Header />
        <Sidebar />
        <div className='px-4 mt-3 sm:ml-64'>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm ">
                <h1 className="text-gray-600 font-bold text-lg mb-3">News</h1>
                <hr />
                <div className="overflow-x-auto">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell>Image</Table.HeadCell>
                            <Table.HeadCell>Type</Table.HeadCell>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Speed</Table.HeadCell>
                            <Table.HeadCell>Battery</Table.HeadCell>
                            <Table.HeadCell>Color</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>City</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800"> */}
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                                <Table.Cell>Edit</Table.Cell>
                            {/* </Table.Row> */}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    </div>    
  )
}


