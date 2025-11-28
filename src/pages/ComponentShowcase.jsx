/**
 * COMPONENT SHOWCASE
 * 
 * This file demonstrates how to use all the Shadcn components included in this template.
 * Use this as a reference when building new features.
 */

import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Calendar } from '@/components/ui/calendar';
import { DatePicker } from '@/components/ui/date-picker';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupText } from '@/components/ui/input-group';
import { Item } from '@/components/ui/item';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Terminal, User, Settings, Search } from 'lucide-react';

export function ComponentShowcase() {
  const [date, setDate] = useState(new Date());
  const [comboValue, setComboValue] = useState('');

  const comboOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold">Component Showcase</h1>
      <p className="text-muted-foreground">
        All Shadcn components included in this template
      </p>

      <Separator />

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Middle</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </section>

      <Separator />

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Form Elements</h2>
        
        <Field label="Email" error="">
          <Input type="email" placeholder="Enter your email" />
        </Field>

        <Field label="Message">
          <Textarea placeholder="Type your message here" />
        </Field>

        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input placeholder="Username" />
        </InputGroup>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
        </RadioGroup>

        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <div className="space-y-2">
          <Label>Volume</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </section>

      <Separator />

      {/* Cards & Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cards & Alerts</h2>
        
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This is an informational alert message.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </section>

      <Separator />

      {/* Badges & Progress */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Badges & Progress</h2>
        
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <div className="space-y-2">
          <Label>Loading Progress</Label>
          <Progress value={66} />
        </div>

        <Spinner />
      </section>

      <Separator />

      {/* Dropdowns & Menus */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dropdowns & Menus</h2>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                This is a popover with some content.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      <Separator />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tabs</h2>
        
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for tab 1</TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Table</h2>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell><Badge>Active</Badge></TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
              <TableCell>jane@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <Separator />

      {/* Date & Calendar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Date Picker & Calendar</h2>
        
        <DatePicker date={date} setDate={setDate} />
        
        <Card className="w-fit">
          <CardContent className="p-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Other Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Other Components</h2>
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Showcase</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Username</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
          </div>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <ToggleGroup type="single">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>

        <Combobox 
          options={comboOptions}
          value={comboValue}
          setValue={setComboValue}
          placeholder="Select an option..."
        />
      </section>

      <Separator />

      {/* Dialogs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dialogs</h2>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </div>
  );
}
