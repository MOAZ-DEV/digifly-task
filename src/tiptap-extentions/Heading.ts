import BaseHeading from '@tiptap/extension-heading'
import { mergeAttributes } from '@tiptap/core'

type Levels = 1 | 2 | 3 

const classes: Record<Levels, string> = {
  1: 'text-base',
  2: 'text-xl',
  3: 'text-3xl',
}

export const Heading = BaseHeading.configure({ levels: [1, 2, 3, 4] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
})
