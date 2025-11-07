"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import type {Contact} from "@/types/resume"; 
import Link from "next/link";

type ContactFormData = {
    name: string
    email: string
    message: string
}

export default function ContactPage(contact: Contact) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div>
            <p>{contact.address} | {contact.phone} | {contact.email} </p>
            <Link href={contact.linkedin}> Linkedin </Link>

            <form>
                <div>
                <label htmlFor="name" className="block font-medium mb-1">
                    Name:
                </label>
                <input
                    type="name"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                </div>

                <div>
                <label htmlFor="email" className="block font-medium mb-1">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                </div>

                <div>
                <label htmlFor="message" className="block font-medium mb-1">
                    Message:
                </label>
                <input
                    type="message"
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                </div>

                <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                Login
                </button>
            </form>
        </div>
    );
}