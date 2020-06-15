import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Component } from 'react' 

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
       <h1>Login Example</h1>
        <form>
            <label>Email</label><input name="email" label="email" required />
            <br/>
            <label>Password</label><input name="password" label="password" required />
            <br/>
            <input name="submit" type="submit" />
        </form>
    </Layout>
  )
}