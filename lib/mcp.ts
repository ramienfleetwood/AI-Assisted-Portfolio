import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

export class MCPClient {
  private client: Client | null = null
  private transport: StdioClientTransport | null = null

  async connect(serverCommand: string, args: string[] = []) {
    try {
      this.transport = new StdioClientTransport({
        command: serverCommand,
        args,
      })

      this.client = new Client(
        {
          name: 'ai-portfolio-client',
          version: '1.0.0',
        },
        {
          capabilities: {
            tools: {},
          },
        }
      )

      await this.client.connect(this.transport)
      console.log('MCP client connected successfully')
    } catch (error) {
      console.error('Failed to connect MCP client:', error)
      throw error
    }
  }

  async listTools() {
    if (!this.client) {
      throw new Error('MCP client not connected')
    }

    try {
      const response = await this.client.listTools()
      return response.tools
    } catch (error) {
      console.error('Failed to list tools:', error)
      throw error
    }
  }

  async callTool(toolName: string, args: Record<string, unknown>) {
    if (!this.client) {
      throw new Error('MCP client not connected')
    }

    try {
      const response = await this.client.callTool({
        name: toolName,
        arguments: args,
      })
      return response
    } catch (error) {
      console.error(`Failed to call tool ${toolName}:`, error)
      throw error
    }
  }

  async disconnect() {
    if (this.client && this.transport) {
      try {
        await this.client.close()
        await this.transport.close()
        this.client = null
        this.transport = null
        console.log('MCP client disconnected')
      } catch (error) {
        console.error('Failed to disconnect MCP client:', error)
      }
    }
  }
}

export const mcpClient = new MCPClient()
