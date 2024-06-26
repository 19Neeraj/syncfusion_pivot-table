"use client";
import Image from "next/image";
import {
  PivotViewComponent,
  FieldList,
  CalculatedField,
  Inject,
} from "@syncfusion/ej2-react-pivotview";

import datasource from "./data.json";
// import "./globals.css";
const data = datasource.pivotData;

// console.log(data);
export default function SyncfusionJs(props) {
  const { Changeval } = props;
  const valueArray = [
    { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
    { name: "SUM_weight", caption: "weight" },
    { name: "Total", caption: "Total Units  %", type: "CalculatedField" },
  ];
  for (let i = 0; i < valueArray.length; i++) {
    valueArray[0].type = Changeval;
  }
  
  console.log(valueArray);
  return (
    <div id="wrapper">
      <PivotViewComponent
        height={"600"}
        width={"100%"}
        dataSourceSettings={{
          dataSource: data,
          rows: [{ name: "zone" }, { name: "region" }],
          columns: [
            { name: "customer_category" },
            { name: "Product_Group_ID" },
          ],
          values: valueArray, // { name: "Total", caption: "Total Units", type: "CalculatedField" }
          filters: [{ name: "Quarter" }],
          calculatedFieldSettings: [
            {
              name: "Total",
              formula: "Sum(SUM_revenue)" + "Sum(SUM_weight)",
            },
          ],
        }}
        showFieldList={true}
        allowCalculatedField={true}
      >
        <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
}
