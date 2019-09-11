import Renderer from '../Renderer';
import Wrapper from './shared/Wrapper';
import Block from '../Block';
import DebugTag from '../../nodes/DebugTag';
// import add_to_set from '../../utils/add_to_set';
import { b } from 'code-red';

export default class DebugTagWrapper extends Wrapper {
	node: DebugTag;

	constructor(
		renderer: Renderer,
		block: Block,
		parent: Wrapper,
		node: DebugTag,
		_strip_whitespace: boolean,
		_next_sibling: Wrapper
	) {
		super(renderer, block, parent, node);
	}

	render(block: Block, _parent_node: string, _parent_nodes: string) {
		const { renderer } = this;
		// const { component } = renderer;

		if (!renderer.options.dev) return;

		// const { var_lookup } = component;

		if (this.node.expressions.length === 0) {
			// Debug all
			// code.overwrite(this.node.start + 1, this.node.start + 7, 'debugger', {
			// 	storeName: true
			// });
			// const statement = `[✂${this.node.start + 1}-${this.node.start + 7}✂];`;

			block.chunks.create.push(b`debugger`);
			block.chunks.update.push(b`debugger`);
		} else {
			// TODO

			// const { code } = component;
			// code.overwrite(this.node.start + 1, this.node.start + 7, 'log', {
			// 	storeName: true
			// });
			// const log = `[✂${this.node.start + 1}-${this.node.start + 7}✂]`;

			// const dependencies = new Set();
			// this.node.expressions.forEach(expression => {
			// 	add_to_set(dependencies, expression.dependencies);
			// });

			// const condition = Array.from(dependencies).map(d => `changed.${d}`).join(' || ');

			// const ctx_identifiers = this.node.expressions
			// 	.filter(e => {
			// 		const looked_up_var = var_lookup.get(e.node.name);
			// 		return !(looked_up_var && looked_up_var.hoistable);
			// 	})
			// 	.map(e => e.node.name)
			// 	.join(', ');
			// const logged_identifiers = this.node.expressions.map(e => e.node.name).join(', ');

			// block.chunks.update.push(b`
			// 	if (${condition}) {
			// 		const { ${ctx_identifiers} } = ctx;
			// 		@_console.${log}({ ${logged_identifiers} });
			// 		debugger;
			// 	}
			// `);

			// block.chunks.create.push(b`
			// 	{
			// 		const { ${ctx_identifiers} } = ctx;
			// 		@_console.${log}({ ${logged_identifiers} });
			// 		debugger;
			// 	}
			// `);
		}
	}
}
