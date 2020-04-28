import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './contact.css';
import { Link } from "gatsby"


const Contact = () => (
    <Layout>
        <SEO title='Contact' description='Code in Quarentine'/>
        <div className='contact__header'></div>
        <div className='contact__section'>
            <div className='contact__form'>
                <h1>Code in Quarantine: Registration Form</h1>

                    <div>

                    <Link to='/' className='viewmore'>Learn More </Link>
                   </div>
                   
                <div className='inner'>
                    <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
                    <input type='hidden' name='form-name' value='contact' />
                    <div className='field__hidden'>
                        <label>Don't fill this out, human</label>
                        <input name='bot' />
                    </div>

                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' />
                    </div>
                     <div className='field'>
                        <label>Contact Number</label>
                        <input type='text' name='number' />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' />
                    </div>

                    <div className='field'>
                        <label>Address</label>
                        <input type='text' name='address' />
                    </div> 

                    <div className='field'>
                        <label>College</label>
                        <input type='text' name='college' />
                    </div>


                    <div className='field'>
                        <label>Year || Semester </label>
                        <input type='text' name='year_semester' />
                    </div>

                    <div className='submit'>
                        <button type='submit' className='btn__med'>Submit</button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
      
    </Layout>
)

export default Contact
