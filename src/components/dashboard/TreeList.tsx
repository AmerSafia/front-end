import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { SvgIconProps, SvgIconTypeMap } from "@mui/material/SvgIcon";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SummarizeIcon from "@mui/icons-material/Summarize";
import StyleIcon from "@mui/icons-material/Style";
import PeopleIcon from "@mui/icons-material/People";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Link } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MoneyIcon from "@mui/icons-material/Money";
import StoreIcon from "@mui/icons-material/Store";
import BadgeIcon from "@mui/icons-material/Badge";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}
type Tree = {
  nodeId: string;
  labelText: string;
  labelIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  link: string;
  subTree?: Tree[];
};

export default function GmailTreeView() {
  const tree = [
    {
      nodeId: "1",
      labelText: "Mobile",
      labelIcon: PhoneAndroidIcon,
      subTree: [
        {
          nodeId: "1-1",
          labelText: "Model",
          labelIcon: PhoneAndroidIcon,
          link: "mobile/model",
        },
        {
          nodeId: "1-2",
          labelText: "Store",
          labelIcon: StoreIcon,
          link: "mobile/store",
        },
      ],
    },
    {
      nodeId: "2",
      labelText: "Accessories",
      labelIcon: ShoppingBagIcon,
      subTree: [
        {
          nodeId: "2-1",
          labelText: "Type",
          labelIcon: BadgeIcon,
          link: "accessories/type",
        },
        {
          nodeId: "2-2",
          labelText: "Store",
          labelIcon: StoreIcon,
          link: "accessories/store",
        },
      ],
    },
    {
      nodeId: "4",
      labelText: "Cards",
      labelIcon: StyleIcon,
      subTree: [
        {
          nodeId: "4-1",
          labelText: "Type",
          labelIcon: BadgeIcon,
          link: "card/type",
        },
        {
          nodeId: "4-2",
          labelText: "Store",
          labelIcon: StoreIcon,
          link: "card/store",
        },
        {
          nodeId: "4-3",
          labelText: "Value",
          labelIcon: MoneyIcon,
          link: "card/value",
        },
      ],
    },
    {
      nodeId: "5",
      labelText: "Daily Sales",
      labelIcon: SummarizeIcon,
      link: "daily-sales",
      subTree: [],
    },
    {
      nodeId: "6",
      labelText: "Expense",
      labelIcon: RequestQuoteIcon,
      subTree: [
        {
          nodeId: "6-1",
          labelText: "Type",
          labelIcon: MonetizationOnIcon,
          link: "expense/type",
        },
        {
          nodeId: "6-2",
          labelText: "Expenses",
          labelIcon: PriceCheckIcon,
          link: "expense/expenses",
        },
      ],
    },
    {
      nodeId: "10",
      labelText: "Hr",
      labelIcon: SupervisorAccountIcon,
      subTree: [
        {
          nodeId: "10-1",
          labelText: "Employees",
          labelIcon: SupervisorAccountIcon,
          link: "hr/employees",
          subTree: [],
        },
        {
          nodeId: "10-2",
          labelText: "Salary",
          labelIcon: SupervisorAccountIcon,
          link: "hr/salary",
          subTree: [],
        },
        {
          nodeId: "10-3",
          labelText: "Salary Payment",
          labelIcon: SupervisorAccountIcon,
          link: "hr/salary/payment",
          subTree: [],
        },
      ],
    },
    {
      nodeId: "7",
      labelText: "Users",
      labelIcon: PeopleIcon,
      link: "users",
      subTree: [],
    },
    {
      nodeId: "8",
      labelText: "Distributors",
      labelIcon: GroupsIcon,
      link: "distributors",
      subTree: [],
    },
    {
      nodeId: "9",
      labelText: "brand",
      labelIcon: AutoAwesomeIcon,
      link: "brand",
      subTree: [],
    },
  ] as Tree[];

  const SubtreeItem = (item: Tree) => {
    return (
      <Link to={item.link} style={{ textDecoration: "none" }} key={item.nodeId}>
        <StyledTreeItem
          nodeId={item.nodeId}
          labelText={item.labelText}
          labelIcon={item.labelIcon}
        ></StyledTreeItem>
      </Link>
    );
  };

  const maintreeItem = (item: Tree) => {
    return (
      <StyledTreeItem
        key={item.nodeId}
        labelIcon={item.labelIcon}
        labelText={item.labelText}
        nodeId={item.nodeId}
      >
        {item.subTree!.map((ele) => SubtreeItem(ele))}
      </StyledTreeItem>
    );
  };

  const treeMapper = (tree: Tree[]) => {
    return tree.map((item) => {
      if (item.subTree?.length) {
        return maintreeItem(item);
      } else {
        return SubtreeItem(item);
      }
    });
  };

  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {treeMapper(tree)}
    </TreeView>
  );
}
