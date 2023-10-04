import OpenAI from 'openai'

const openai = new OpenAI({
  // apiKey: 'nv-ItoBTvET6cPdDIrRhgn0N0V4x0SSN3QgXNjJuVFdSbHAUehz',
  // baseURL: 'https://api.nova-oss.com/v1',
  apiKey: 'sk-NGFGQ0RGOGNhQzlkT3BlbkFJRUZiYmUyOTNlOTNF',
  baseURL: 'https://api.daku.tech/v1',
  dangerouslyAllowBrowser: true
})

const api = {
  async sendRequest(request, messages) {
    const completion = await openai.chat.completions.create({
      messages: [...messages, { role: 'user', content: request }],
      model: 'gpt-3.5-turbo'
    })

    return completion.choices[0].message.content
  }
}

export default api
