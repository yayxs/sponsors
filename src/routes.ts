import type { RouteRecord } from 'vite-react-ssg'
import Layout from './pages/Layout'
import Home from './pages/Layout'

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
]

async function defaultToComponent(modP: Promise<{ default: any }>) {
  const { default: Component } = await modP
  return { Component }
}
