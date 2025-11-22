import React, { useState } from "react";
import {
	Badge,
	Box,
	Button,
	Checkbox,
	Column,
	Dialog,
	Input,
	Progress,
	Radio,
	Row,
	Separator,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Textarea,
} from "webtui-react";
import "webtui-react/styles";

export default function App() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [checked, setChecked] = useState(false);
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<div data-webtui-theme={theme} style={{ padding: "2rem" }}>
			<Column>
				<Row align="between">
					<h1>TUI CSS React - Component Demo</h1>
					<Button
						variant="background1"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					>
						Toggle {theme === "light" ? "🌙" : "☀"}
					</Button>
				</Row>

				<Separator />

				<Box box="round">
					<h2>Buttons</h2>
					<Row>
						<Button variant="foreground0">Foreground 0</Button>
						<Button variant="foreground1">Foreground 1</Button>
						<Button variant="background0">Background 0</Button>
						<Button variant="background1">Background 1</Button>
					</Row>
					<Row>
						<Button size="small">Small</Button>
						<Button size="default">Default</Button>
						<Button size="large">Large</Button>
					</Row>
					<Row>
						<Button box="square">Square Box</Button>
						<Button box="round">Round Box</Button>
						<Button disabled>Disabled</Button>
					</Row>
				</Box>

				<Box box="round">
					<h2>Badges</h2>
					<Row>
						<Badge>Default Badge</Badge>
						<Badge variant="background0">Background Badge</Badge>
					</Row>
				</Box>

				<Box box="round">
					<h2>Form Inputs</h2>
					<Column>
						<Input placeholder="Text input..." />
						<Textarea placeholder="Textarea..." rows={3} />
						<Checkbox
							label="Checkbox option"
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
						/>
						<Row>
							<Radio name="radio-group" label="Option 1" />
							<Radio name="radio-group" label="Option 2" />
							<Radio name="radio-group" label="Option 3" />
						</Row>
					</Column>
				</Box>

				<Box box="round">
					<h2>Progress & Spinner</h2>
					<Column>
						<Progress value={70} max={100} />
						<Row align="start">
							<Spinner />
							<span>Loading...</span>
						</Row>
					</Column>
				</Box>

				<Box box="round">
					<h2>Table</h2>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Value</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Item 1</TableCell>
								<TableCell>Active</TableCell>
								<TableCell>100</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Item 2</TableCell>
								<TableCell>Inactive</TableCell>
								<TableCell>50</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Item 3</TableCell>
								<TableCell>Active</TableCell>
								<TableCell>75</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Box>

				<Box box="round">
					<h2>Dialog</h2>
					<Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
					<Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
						<Box
							box="round"
							style={{ padding: "2rem", background: "var(--background0)" }}
						>
							<Column>
								<h2>Dialog Title</h2>
								<p>
									This is a modal dialog using the native HTML dialog element.
								</p>
								<Separator />
								<Row align="end">
									<Button onClick={() => setDialogOpen(false)}>Close</Button>
								</Row>
							</Column>
						</Box>
					</Dialog>
				</Box>
			</Column>
		</div>
	);
}
